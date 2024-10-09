const table = document.querySelector("table");
    let startX, startWidth, resizableCol;

    // Bắt đầu kéo
    function startResize(e) {
        resizableCol = e.target.parentElement;
        startX = e.pageX;
        startWidth = resizableCol.offsetWidth;
        document.addEventListener("mousemove", resizeColumn);
        document.addEventListener("mouseup", stopResize);
    }

    // Thay đổi kích thước
    function resizeColumn(e) {
        const newWidth = startWidth + (e.pageX - startX);
        resizableCol.style.width = newWidth + "px";
    }

    // Dừng kéo
    function stopResize() {
        document.removeEventListener("mousemove", resizeColumn);
        document.removeEventListener("mouseup", stopResize);
    }

    // Gắn sự kiện vào các thẻ th để cho phép kéo
    document.querySelectorAll("th.resize").forEach(th => {
        const resizeHandle = document.createElement("div");
        resizeHandle.style.height = "100%";
        resizeHandle.style.width = "5px";
        resizeHandle.style.position = "absolute";
        resizeHandle.style.right = "0";
        resizeHandle.style.top = "0";
        resizeHandle.style.cursor = "col-resize";
        resizeHandle.addEventListener("mousedown", startResize);
        th.appendChild(resizeHandle);
        th.style.position = "relative";
    });
