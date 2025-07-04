document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".site-footer");
  if (footer) {
    footer.insertAdjacentHTML("beforeend", `
      <div style="text-align:center; margin-top:10px; font-size:0.9em;">
        <p style="margin: 0;">Showdown of the Sticks - A fast-paced, pixel-art style stick figure fighting game.</p>
        <p style="margin: 0;">&copy; ${new Date().getFullYear()} Arslaan Pathan</p>
        <div style="margin-top: 15px;">
          <strong>Follow development:</strong><br/>
          <a href="https://youtube.com/@DevWithArslaan" target="_blank">YouTube</a> |
          <a href="https://github.com/RealArslaanYT" target="_blank">GitHub</a> |
          <a href="https://arslaan3102.itch.io/showdown-of-the-sticks" target="_blank">itch.io</a> |
          <a href="https://arslaan3102.justlearning.net/" target="_blank">My Portfolio</a>
        </div>
      </div>
    `);
  }

  const baseurl = window.location.pathname.includes("/Showdown-Of-The-Sticks") ? "/Showdown-Of-The-Sticks" : "";
  const sidebarHTML = `
    <aside class="sidebar">
      <div class="site-name">Showdown of the Sticks</div>
      <ul>
        <li><a href="${baseurl}/">Home</a></li>
        <li><a href="${baseurl}/about">About</a></li>
      </ul>
    </aside>
  `;

  document.body.innerHTML = sidebarHTML + document.body.innerHTML;
});
