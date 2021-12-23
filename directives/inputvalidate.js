export default {

    update: function (el) {

        console.log('update');
        console.log(el.parentNode)
        console.log(el.value.length )
        if ( el.value.length < 3 ) {
            el.parentNode.classList.add('card-data-content__field--error')
        }
        else if ( el.value.length >= 3 ) {          
            el.parentNode.classList.remove('card-data-content__field--error')
        }
        
    }
}