(async function load() {
  const $containerSidebar = document.getElementById("sidebar");
  const urlUsers = "https://randomuser.me/api/?results=1";

  async function getUsers(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }

  getUsers(urlUsers);

  function profileTemplate(user) {
    return `
    <div class="container__sidebar-profilePic">
        <img src="${user.picture.large}" alt="ProfilePic">
    </div>

    `;
  }

  function createProfileTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;

    return html.body.children[0];
  }

  function renderProfilePic(list, $container) {
    list.forEach((user) => {
      const HTMLString = profileTemplate(user);

      const userElement = createProfileTemplate(HTMLString);
      $container.append(userElement);
    });
  }

  const { results: userList 
    } = await getUsers(`${urlUsers}`);

  renderProfilePic(userList, $containerSidebar);
})();
