import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "../../../../../common/components/form/FormInput";
import { DashboardContext } from "../../../context/DashboardContext";
import { DashboardContextInterface } from "../../../types/context/dashboardContext";
import networkMapping from 'constants/networkMapping.json';
import EditorAbi from 'constants/EditorAbi.json';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { Loader } from "@/common/components/Loader";

type ISoulForm = {
    name: string;
    professionalTitle: string;
}

export const RegisterSoulForm = () => {
    const { setRequireOnboarding } = useContext(DashboardContext) as DashboardContextInterface;
    const [tx, setTx] = useState<string>('');

    const { config,
        error: prepareError,
        isError: isPrepareError,
    } = usePrepareContractWrite({
        address: `0x${networkMapping[3141].Editor.slice(2, networkMapping[3141].Editor.length)}`,
        abi: EditorAbi,
        functionName: 'mintID',
        args: ["uri", "name", "profession", "mail"],
        enabled: true
    })
    const { data: contractWriteData, error, writeAsync, isLoading, isError } = useContractWrite(config)

    const { data: transactioData, status: statusTx, isLoading: isLoadingTx, refetch: refetchTransaction, isFetching } = useWaitForTransaction({
        hash: tx !== '' ? `0x${tx.slice(2, tx.length)}` : '0x2',
        enabled: tx !== '' ? true : false,
        onSuccess(data) {
            setRequireOnboarding(false)
        },
        onError(error) {
            console.log(`Error ${error}`)
        },
    })
    console.log(contractWriteData)
    console.log(tx)
    console.log(transactioData)

    if (contractWriteData && tx === '') {
        setTx(contractWriteData.hash)
        refetchTransaction();
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISoulForm>();

    const handleRegisterSoul = handleSubmit(async (data: ISoulForm) => {
        await writeAsync?.()
    })

    return <div className="w-full m-auto flex justify-center items-center">
        <div className="bg-white rounded-3xl p-8 mb-5 h-4/5 flex flex-col gap-12 items-center">
            <h2 className="text-gray-700 font-bold text-2xl">Please enter your information</h2>
            <p className="text-gray-500 text-center px-32">The information you provide in the form will be used to create a unique, soul-bound token. This token will securely store and hold the data you have provided, ensuring its integrity and accessibility.</p>
            <div className="flex flex-col justify-between w-full h-full items-center gap-16">
                <div className="w-full px-12 ">
                    <FormInput<ISoulForm>
                        id="name"
                        type="text"
                        name="name"
                        label="Full Name *"
                        placeholder="e.x. Vitalik Buterin"
                        className="mb-2 w-full text-xl text-gray-700"
                        register={register}
                        rules={{ required: 'You must enter your full name.' }}
                        errors={errors}
                    />

                    <FormInput<ISoulForm>
                        id="professionalTitle"
                        type="text"
                        name="professionalTitle"
                        label="Professional Title *"
                        placeholder="e.x. Doctor in Physics"
                        className="mb-2 w-full text-xl text-gray-700"
                        register={register}
                        rules={{ required: 'You must enter your profession title.' }}
                        errors={errors}
                    />

                    <div className="max-w-2xl text-red-500 whitespace-pre-wrap">
                        {(isPrepareError || isError) && (
                            <div>Error: {(prepareError || error)?.message}</div>
                        )}
                    </div>
                </div>
                <button onClick={handleRegisterSoul} disabled={isLoading || isLoadingTx || isFetching || !writeAsync} className='btn bg-transparent hover:bg-gray-200 text-gray-800 w-fit' style={{ cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🥳</text></svg>")  16 0,  auto` }}>
                    {
                        isLoading || isLoadingTx || isFetching || !writeAsync ? <Loader /> :
                            <>Mint my soul token!</>
                    }
                </button>
            </div>
        </div>
    </div>
}