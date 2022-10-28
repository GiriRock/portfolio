export default {
    name: 'technologies',
    title: 'Technologies',
    type: 'document',
    fields: [
      {
        name:"image",
        title : "Image",
        type : "image",
        options:{
          hotspot : true
        }
      },
      {
        name : "title",
        title : "Title",
        type : "string"
      },
      {
        name : "progress",
        title : "Progress",
        type : "number",
        validation : (Rule) => Rule.min(0).max(100)
      }
    ]
  }
  