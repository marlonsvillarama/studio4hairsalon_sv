<script>
    export let id = 'inputText';
    export let label = 'Text Input';
    export let required = false;
    export let data = [
        {
            text: 'Option 1',
            value: 'option01'
        }
    ];
</script>

<div class="fieldset">
    <label for={id}>{label}</label>
    <select name={id} id={id} required={required}>
        {#each data as d}
            <option value={d.value}>{d.text}</option>
        {/each}
    </select>
</div>

<style>
</style>