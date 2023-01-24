import classNames from "classnames"
import { useAccount, useBalance, useConnect } from "wagmi";

export const ConnectWallet = () => {
    const { connectors, isLoading, connect, error, pendingConnector } = useConnect()

    return <>
        <label htmlFor="my-modal" className="btn">open modal</label>
        <input type="checkbox" id="my-modal" className="modal-toggle" />

        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div className="flex flex-col gap-8">
                    {connectors.map((connector) => (
                        <button
                            disabled={!connector.ready}
                            key={connector.id}
                            onClick={() => connect({ connector })}
                        >
                            <p>{connector.name}</p>
                            <p>{!connector.ready ? '(unsupported)' : ''}</p>
                            {isLoading &&
                                connector.id === pendingConnector?.id &&
                                <p>{'(connecting)'}</p>
                            }
                        </button>
                    ))}
                    {error && <div>{error.message}</div>}
                </div>
            </div>
        </div>
    </>
}