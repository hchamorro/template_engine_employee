class CreateHtml {
  constructor(data) {
    this.data = data;
  }

  section(data) {
    `<section class="bxsh-0-5-15-0 m-1  w-20">
    <div class=" bgc-var-main p-.5">
      <h3 class="p-.5">
        ${data.name} <br />
        ${data.title}
      </h3>
    </div>
    <div class="m-1 p-.5">
      <div class="p-.5">
        ID: ${data.id}
      </div>
      <div class="p-.5">
        Email: ${data.id}
      </div>
      <div class="p-.5">
        ${uniqueId}
      </div>
    </div>
  </section>`;
  }
}

const makeSection = data => {
  let section = `<section class="bxsh-0-5-15-0 m-1  w-20">
    <div class=" bgc-var-main p-.5">
      <h3 class="p-.5">
        ${data.name} <br />
        ${data.title}
      </h3>
    </div>
    <div class="m-1 p-.5">
      <div class="p-.5">
        ID: ${data.id}
      </div>
      <div class="p-.5">
        Email: ${data.id}
      </div>
      <div class="p-.5">
        ${uniqueId}
      </div>
    </div>
  </section>`;
  return section;
};

module.exports = makeSection;
