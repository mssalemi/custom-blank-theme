Starter Template:
https://github.com/polidario/Elizabeth_Clean

tailwind Installation:
https://tailwindcss.com/docs/installation

## Commands

```
npm run dev
```

```
shopify theme dev --store=theme-testing-medxman.myshopify.com
```

**Keep Tailwind Running**

```
npx tailwindcss -i ./src/tailwind.css -o ./dist/output.css --watch
```

## Sample Schema

```
{% schema %}
{
  "name": "Slideshow",
  "tag": "section",
  "class": "slideshow",
  "limit": 1,
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Slideshow"
    }
  ],
  "max_blocks": 5,
  "blocks": [
     {
       "name": "Slide",
       "type": "slide",
       "settings": [
         {
           "type": "image_picker",
           "id": "image",
           "label": "Image"
         }
       ]
     }
  ],
  "presets": []
}
{% endschema %}
```
