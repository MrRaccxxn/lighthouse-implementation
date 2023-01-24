import _ from "lodash";
import classNames from "classnames";
import { useWeb3Auth } from "../context/web3AuthContext";

export const NavBar = () => {
    const { publicKey, login, logout, isLoading } = useWeb3Auth()

    const handleLogin = async () => {
        await login();
    }

    return <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>

        {
            _.isEmpty(publicKey) ?
                (
                    <button className={classNames([
                        'btn',
                        isLoading ? '' : '',
                    ])} onClick={handleLogin}>Login</button>
                )
                :
                (
                    <button onClick={logout}>
                        <div className="flex flex-row gap-3 items-center">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className="font-medium">
                                <div className="text-white">
                                    {publicKey.slice(0, 5) + '...' + publicKey.slice(publicKey.length - 5, publicKey.length)}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Dungeon Master
                                </div>
                            </div>
                        </div>
                    </button>
                )
        }
    </div>
}