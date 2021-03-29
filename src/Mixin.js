export const newMixin = {
    data() {
        return {
            mixinWord: "Howey"
        }
    },
computed: {
    computedReverse(){
        return this.computedText.split('').reverse().join('')
    },
    computedLength(){
        let something = this.computedWord + " (" + this.computedWord.length + ")"
        return something;
    }

}
}