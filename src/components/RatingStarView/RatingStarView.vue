@<template>
    <div class="rating-star">
        <star-rating 
            :increment="0.5"
            :star-size="10"
            :border-width="4" 
            border-color="#d8d8d8" 
            :rounded-corners="true" 
            :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
            :show-rating="false"
        ></star-rating>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    components: {
        StarRating,
    },
    data() {
        return {
            rating: "No Rating Selected",
            currentRating: "No Rating",
            currentSelectedRating: "No Current Rating",
            boundRating: 3,
        }
    },
    methods: {
        setRating: function(rating) {
            this.rating = "You have Selected: " + rating + " stars";
        },
        showCurrentRating: function(rating) {
            this.currentRating = (rating === 0) ? this.currentSelectedRating : "Click to select " + rating + " stars"
        },
        setCurrentSelectedRating: function(rating) {
            this.currentSelectedRating = "You have Selected: " + rating + " stars";
        }
    },
}
</script>

<style scoped lang="scss">
    @import "RatingStar.scss";
</style>