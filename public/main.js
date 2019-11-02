console.log('我是新的')
n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1
        }

    }
    request.send()

}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/xx.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(typeof request.response);
            console.log(request.response);
            const object = JSON.parse(request.response);
            console.log(typeof object);
            myName.textContent = object.name
        }
    };
    request.send();
};

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        const html = document.createElement('div')
        html.innerHTML = request.response
        document.body.appendChild(html)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()

}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', "/2.js")
    request.onload = () => {
        console.log(request.response)

        const script = document.createElement("script")
        //创建script标签
        script.innerHTML = request.response
        //在script标签中添加内容 
        document.body.appendChild(script)
        //插到body里面
        console.log('js成功了')
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.body.appendChild(style)
            }
            else {
                alert('路径错误')
            }
        }
    }
    request.open('GET', '/style.css')
    request.send()
}
