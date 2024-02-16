import React from 'react'
//hocam değerleri bir bütün halinde dönebilmek için hepsini sarmalayn bir div elementine ihtiyacın var
//ancak div oluşturm ak yerine sadece tag (<> </> )açıp bırakabilirsin buna da fragment denir

//vee hocam çok önemli bir nokta companentin adı keyle aynı olmamalı yoksa çalışmıyor dikat :))
function Login() {
    return (
        <div>
            <div>
                <p>Username</p>
                <input type='text'></input>
            </div>
            <div>
                <p>Password</p>
                <input type='password'></input>
            </div>
            <button type='submit'>login</button>
        </div>
    )
}

export default Login
