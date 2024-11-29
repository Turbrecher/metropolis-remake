export class Scroll {
    static scrollUp() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
}