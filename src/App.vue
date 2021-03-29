<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-on:click="this+1">Click Me</button>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ text | reverseMessage }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ word | getLength }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>{{ computedReverse }}</p>
                <p>{{ computedLength }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>{{ mixinWord | getLength }}</p>

            </div>
        </div>
    </div>
</template>

<script>
    import {newMixin} from './Mixin.js'
    export default {
    data() {
            return {
                text: "Howey",
                word: "Howey",
                computedText: "Howey",
                computedWord: "Howey"
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

    },
    mixins: [newMixin],
    filters: {
        reverseMessage(value) {
            return value.split('').reverse().join('')
        }
    }   
    }
</script>

<style>
</style>
