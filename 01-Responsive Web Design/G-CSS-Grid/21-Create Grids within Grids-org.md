```
    <style>
    .item1 {
        background: LightSkyBlue;
        grid-area: header;
    }
    
    .item2 {
        background: LightSalmon;
        grid-area: advert;
    }
    
    .item3 {
        background: PaleTurquoise;
        grid-area: content;
        /* enter your code below this line */
        
        
        /* enter your code above this line */
    }
    
    .item4 {
        background: lightpink;
        grid-area: footer;
    }
    
    .itemOne {
        background: PaleGreen;
    }
    
    .itemTwo {
        background: BlanchedAlmond;
    }
    
    .container {
        font-size: 1.5em;
        min-height: 300px;
        width: 100%;
        background: LightGray;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto 1fr auto;
        grid-gap: 10px;
        grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
    </style>
    
    <div class="container">
    <div class="item1">header</div>
    <div class="item2">advert</div>
    <div class="item3">
        <div class="itemOne">paragraph1</div>
        <div class="itemTwo">paragraph2</div>
    </div>
    <div class="item4">footer</div>
    </div>
```