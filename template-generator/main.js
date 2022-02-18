const fs = require('fs')
const parser = require('node-html-parser')
const template = fs.readFileSync('./template.vue')

const main = () => {
  for (const blockName of [
    'Blog',
    'Contact',
    'Content',
    'Cta',
    'Ecommerce',
    'Feature',
    'Footer',
    'Gallery',
    'Header',
    'Hero',
    'Pricing',
    'Statistics',
    'Step',
    'Team',
    'Testimonial',
  ]) {
    for (const variant of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']) {
      const lightName = `../original/${blockName.toLowerCase()}/light${variant.toUpperCase()}.html`
      const darkName = `../original/${blockName.toLowerCase()}/dark${variant.toUpperCase()}.html`
      if (fs.existsSync(lightName)) {
        console.log(`processing ${lightName}`)
        const light = parser.parse(fs.readFileSync(lightName))
        const dark = parser.parse(fs.readFileSync(darkName))
        processNodes(light, dark)

        if (!fs.existsSync(`../components/${blockName.toLowerCase()}`))
          fs.mkdirSync(`../components/${blockName.toLowerCase()}`)
        /** @type {String} */
        let component = JSON.parse(JSON.stringify(template.toString()))
        let componentContent = light.toString()
        componentContent = componentContent.replaceAll(/class="(.*indigo.*?)"/gi, ':class="`$1`"')
        // eslint-disable-next-line no-template-curly-in-string
        componentContent = componentContent.replaceAll(/indigo/gi, '${theme}')
        component = component.replace('<div>content</div>', componentContent)
        fs.writeFileSync(`../components/${blockName.toLowerCase()}/${blockName}${variant.toUpperCase()}.vue`, component)
      }
    }
  }
}

/**
 * processes the passed HTMLElements and its childen recursively
 * @param {HTMLElement} light
 * @param {HTMLElement} dark
 */
const processNodes = (light, dark) => {
  mergeClasses(light.classList, dark.classList)
  for (let i = 0; i < light.childNodes.length; i++) {
    if (light.childNodes[i].nodeType === 1) {
      processNodes(light.childNodes[i], dark.childNodes[i])
    }
  }
}

/**
 * Adds all classes in clTwo that are not in clOne to clOne with prefix 'dark:'
 * @param {Set} clOne
 * @param {Set} clTwo
 * @returns {Set}
 */
const mergeClasses = (clOne, clTwo) => {
  if (clOne.size !== clTwo.size) {
    console.warn('class count mismatch!')
    console.warn('clOne:', clOne.values())
    console.warn('clTwo:', clTwo.values())
  }
  for (const className of clTwo.values()) {
    if (!clOne.contains(className)) {
      clOne.add(`dark:${className}`)
    }
  }
  return clOne
}

main()
