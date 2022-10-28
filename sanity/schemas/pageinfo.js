export default {
  name: 'pageinfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name:"profilepic",
      title : "ProfilePic",
      type : "image",
      options:{
        hotspot : true
      }
    },
    {
      name:"aboutpic",
      title : "AboutPic",
      type : "image",
      options:{
        hotspot : true
      }
    },
    {
      name : "phonenumber",
      title : "PhoneNumber",
      type : "string"
    },
    {
      name : "email",
      title : "Email",
      type : "string"
    },
    {
      name : "location",
      title : "Location",
      type : "string"
    },
    {
      name : "socials",
      title : "Socials",
      type : "array",
      of : [{type : "reference", to : {type : "social"}}]
    }
  ]
}
