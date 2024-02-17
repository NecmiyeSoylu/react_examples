import React from 'react'

function Container({ children }) { // hocam mevzuyu anladık bence iç içe component yazdığımızda içteki çocuk oluyor. 
    // bunu childeren dan baska keywodr ile çağıramayız bunu yazmak şart bunun dışında da 
    //aynı çocuğu birden fazla yaöışasak arraya dönğşğr alırken yine sadece childeren yazr sonra index ike istdiğimiz çocuğu çağırrıız :))
    console.log("this : ", children)
    return (
        <div>
            container component is run
            {children[0]}
            {children[0]}
        </div>
    )
}

export default Container
