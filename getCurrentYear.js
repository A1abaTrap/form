    // Function lấy năm hiện tại
    function getCurrentYear() {
        return new Date().getFullYear();
    }
    
    // Lấy năm và gán vào biến
    const year = getCurrentYear();
    
    // Thay thế nội dung HTML với các phép tính năm
    document.body.innerHTML = document.body.innerHTML.replace(/\${year}/g, year)  // Thay thế ${year}
                                                   .replace(/\${year - 1}/g, year - 1); // Thay thế ${year - 1}
