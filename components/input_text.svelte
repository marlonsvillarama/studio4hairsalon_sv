<script>
    export let id = 'inputText';
    export let label = 'Text Input';
    export let required = false;
</script>

<div class="fieldset">
    <label for={id} class="{required === false ? 'optional' : ''}">{label}</label>
    <input type="text" name={id} id={id} required={required}>
</div>

<style>
</style>