$(document).ready(function () {
    // Thêm chức năng hiển thị ngày, giờ và vị trí
    function updateDateTime() {
        const now = new Date();
        const dateString = now.toLocaleDateString();
        const timeString = now.toLocaleTimeString();
        $('#date-time').text(`Date: ${dateString}, Time: ${timeString}`);
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});
