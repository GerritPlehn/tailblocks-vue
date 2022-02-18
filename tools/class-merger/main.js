const fs = require('fs')
const parser = require('node-html-parser')

const main = () => {
  for (const blockName of [
    'blog',
    'contact',
    'content',
    'cta',
    'ecommerce',
    'feature',
    'footer',
    'gallery',
    'header',
    'hero',
    'pricing',
    'statistics',
    'step',
    'team',
    'testimonial',
  ]) {
    for (const variant of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']) {
      const lightName = `./blocks/${blockName}/light${variant.toUpperCase()}.html`
      const darkName = `./blocks/${blockName}/dark${variant.toUpperCase()}.html`
      if (fs.existsSync(lightName)) {
        console.log(`processing ${lightName}`)
        const light = parser.parse(fs.readFileSync(lightName))
        const dark = parser.parse(fs.readFileSync(darkName))
        processNodes(light, dark)
        fs.writeFileSync(`./blocks/${blockName}/${blockName}${variant.toUpperCase()}.html`, light.toString())
      }
    }
  }
}

const processNodes = (light, dark) => {
  mergeClasses(light.classList, dark.classList)
  for (let i = 0; i < light.childNodes.length; i++) {
    if (light.childNodes[i].nodeType === 1) {
      processNodes(light.childNodes[i], dark.childNodes[i])
    }
  }
}

/**
 *
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
