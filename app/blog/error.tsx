// 'use client' - значит что это клиентский компонент и для него мы можем использовать методы жизн цикла, стейт и тд
'use client'

export default function Error({error}: {error:Error}) {
    return (
        <div>
            <h1>
                Ops {error.message}
            </h1>
        </div>
    );
}
