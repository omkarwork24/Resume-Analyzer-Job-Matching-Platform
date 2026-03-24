function analyze() {
  const resume = document.getElementById("resume").value.toLowerCase();
  const job = document.getElementById("job").value.toLowerCase();

  if (!resume || !job) {
    alert("Please fill both fields");
    return;
  }

  // Common skill list (you can expand)
  const skills = [
    "html", "css", "javascript", "react", "node", "mongodb",
    "python", "java", "c++", "sql", "git"
  ];

  let matched = [];
  let missing = [];

  skills.forEach(skill => {
    if (resume.includes(skill) && job.includes(skill)) {
      matched.push(skill);
    } else if (job.includes(skill) && !resume.includes(skill)) {
      missing.push(skill);
    }
  });

  // Score calculation
  let score = 0;
  if (skills.length > 0) {
    score = Math.round((matched.length / skills.length) * 100);
  }

  displayResult(score, matched, missing);
}

function displayResult(score, matched, missing) {
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML = `
    <h2 class="text-2xl font-bold mb-2">Match Score: ${score}%</h2>

    <p class="mb-2"><strong>Matched Skills:</strong> ${matched.join(", ") || "None"}</p>

    <p><strong>Missing Skills:</strong> ${missing.join(", ") || "None"}</p>
  `;
}