const getImage = (list: string[]) => list[Math.floor(Math.random() * list.length)]

export const generateImages = (size = 10) => {
  const images = ['/images/lanscape.jpeg', '/images/portrait.png']
  return Array.from({ length: size }).map(i => getImage(images))
}