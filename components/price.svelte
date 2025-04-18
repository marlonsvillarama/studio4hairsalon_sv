<script>
    export let id = '0';
    export let label = 'Item';
    export let price = 0;
    export let range = false;

    const bookService = (e) => {
        e.preventDefault();
        console.log(`booking ID ${id}`);

        window.location.href = `/book?sid=${id}`;
    };
</script>

<div class="price">
    <span>{label}</span>
    <div>
        {#if range === true}
            <span>starts at <span class="amt">{price}</span></span>
        {:else}
            <span class="amt">{price}</span>
        {/if}
        <a class="book" on:mouseup={bookService}>Book</a>
    </div>
</div>

<style>
    .price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: var(--color-grey-dark-03);
        font-size: var(--fs-sm);
        margin: 0 1rem;
        /* border: 1px solid red; */
        transition: all 150ms ease-in-out;
        padding: 0.75rem 0;
    }
    .price * {
        transition: all 150ms ease-in-out;
    }
    .price:hover {
        /* cursor: pointer; */
        /* transform: translateX(-1rem); */
    }
    .price:not(:last-child) {
        padding: 0.75rem 0;
        border-bottom: 1px dashed var(--color-grey-lite-01);
        /* margin-bottom: 0.75rem; */
    }
    .price > span:first-child {
        color: var(--color-grey-lite-01);
        /* font-size: var(--fs-lg); */
    }
    .price > :last-child {
        color: var(--color-grey-dark-03);
        font-size: var(--fs-lg);
        font-weight: 700;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
    span.amt::before {
        content: '$';
    }
    a.book {
        color: var(--color-grey-dark-03-rgb-dark);
        font-size: var(--fs-sm);
        font-weight: 400;
        padding: 0.25rem 0.5rem;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 0.25rem;
        cursor: pointer;
        transition: all 150ms ease-in-out;
    }
    .price:hover > span:first-child {
        color: var(--color-accent);
        /* font-weight: 500; */
    }
    .price:hover > *:last-child > a.book {
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        cursor: pointer;
    }
    /* a.book:hover {
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
    } */
</style>