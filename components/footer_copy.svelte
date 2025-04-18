<footer>
    <div class="wrapper content">
        <div class="footer-logo">
            <a href="/"><div class="logo">Studio 4</div></a>
            <span>Where <span class="accent">artistry</span> meets precision</span><br/><br/>
            <span>&copy; Copyright 2025</span><br/><br/>
            <span>7 George Street, Palmerston North</span><br/>
            <span>Phone: (06) 353 5678</span><br/>
            <span>Mobile: (022) 188 5240</span><br/>
        </div>
        <nav>
            <a href="/services" class="link">Browse our services</a>
            <a href="/services" class="link">See our work</a>
            <a href="/reviews" class="link">Read our reviews</a>
            <a href="/contact" class="link">Contact us</a> <br/>
            <a href="/book" class="btn cta">BOOK NOW</a>
        </nav>
        <p class="big accent">Indulge in the ultimate salon experience.</p>
        <!-- <div>div 3</div> -->
    </div>
</footer>

<style>
    footer {
        /* border-top: 1px solid red; */
        /* margin-top: 6rem; */
        background-color: var(--color-grey-dark-03);
        padding: 4rem 0 6rem;
        font-size: var(--fs-sm);
        font-weight: 500;
        color: white;
    }
    footer > div {
        /* border: 1px solid red; */
    }
    footer .content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
    footer .big {
        font-size: var(--fs-3xl);
        line-height: var(--fs-4xl);
        font-weight: 100;
        max-width: 20rem;
        margin-top: -0.5rem;
    }
    footer nav {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
    footer nav a.link {
        color: white;
        font-size: var(--fs-md);
        border-bottom: 1px solid transparent;
        transition: all 150ms ease-in-out;
    }
    footer nav a.link:hover {
        /* text-decoration: underline; */
        border-bottom: 1px solid white;
        transform: translateY(-2px);
    }
</style>