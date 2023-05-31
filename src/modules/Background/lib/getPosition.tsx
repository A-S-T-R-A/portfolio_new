export function getPosition(minPosition: number, maxPosition: number) {
    const top = document.body.getBoundingClientRect().top
    const maxScroll = document.body.scrollHeight - window.innerHeight
    const maxTravel = maxPosition - minPosition
    const y = -(top * maxTravel) / maxScroll + minPosition
    return y
}
