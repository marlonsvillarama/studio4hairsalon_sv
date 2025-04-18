<script>
    import InputDate from "./input_date.svelte";
</script>

<div id="availableTimes">
    <InputDate id="bookDate" label="Appointment Date" />
    <span class="loader" style="display: none;"></span>
</div>

<style>
    span.header {
        font-size: var(--fs-sm);
    }

    .loader {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: inline-block;
        border-top: 3px solid rgba(0, 0, 0, 0.7);
        border-right: 3px solid transparent;
        box-sizing: border-box;
        animation: rotation 500ms linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
</style>