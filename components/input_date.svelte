<script>
    export let id = 'inputText';
    export let label = 'Text Input';
    export let required = false;
</script>

<div class="fieldset">
    <label for={id}>{label}</label>
    <input type="date" name={id} id={id} required={required}>
</div>

<style>
</style>