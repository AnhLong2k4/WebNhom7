// Validate form and prevent submission if invalid
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn không cho biểu mẫu gửi đi ngay lập tức

    let isValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Kiểm tra xem tên có bị trống không
    if (!name) {
        isValid = false;
        alert('Name is required');
    }

    // Kiểm tra xem email có bị trống không
    if (!email) {
        isValid = false;
        alert('Email is required');
    }

    // Kiểm tra xem email có đúng định dạng không
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        alert('Please enter a valid email address');
    }

    // Kiểm tra xem mật khẩu có bị trống không và độ dài mật khẩu
    if (!password) {
        isValid = false;
        alert('Password is required');
    } else if (password.length < 6) {
        isValid = false;
        alert('Password must be at least 6 characters long');
    }

    // Nếu tất cả các kiểm tra đều hợp lệ, biểu mẫu sẽ được gửi
    if (isValid) {
        // alert('Form submitted successfully');
        const formData = {
            name: name,
            email: email,
            password: password
        };

        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }
});


document.getElementById('submit').addEventListener('click', function() {
    window.location.href = 'success.html'; // Điều hướng đến trang thông báo thành công
});
