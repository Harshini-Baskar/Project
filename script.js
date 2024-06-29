document.getElementById('marksForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const marks = parseInt(document.getElementById('marks').value);
    let grade;

    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').textContent = `Grade: ${grade}`;
});
