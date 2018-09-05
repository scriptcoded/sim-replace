module.exports = (text, replacers) => {
  let newText = ''
  let parts = []

  replacers.forEach((replacer) => {
    let matcher = replacer[0]
    let replace = replacer[1]

    let match = matcher.exec(text)

    if (!match) {
      return
    }

    let matches = Object.keys(match)
      .map(key => parseInt(key))
      .filter(key => Number.isInteger(key))
      .slice(1)
      .reduce((array, key) => {
        array.push(match[key])
        return array
      }, [])

    parts.push({
      match: match[0],
      matches: matches,
      replace: replace,
      index: match.index
    })
  })

  if (parts.length <= 0) {
    return text
  }

  parts.forEach((part, i) => {
    let lastPart = (parts[i - 1] || { match: '', index: 0 })

    let keys = [...Array(part.matches.length + 1).keys()].slice(1)

    let prefix = text.substring(lastPart.index + lastPart.match.length, part.index)

    let replacer = part.replace

    if (part.matches.length > 0) {
      replacer = part.replace.replace(new RegExp(`\\$${keys.join('|\\$')}`), item => {
        let index = parseInt(item.substr(1)) - 1
        return part.matches[index]
      })
    }

    newText += prefix
    newText += replacer
  })

  return newText
}
