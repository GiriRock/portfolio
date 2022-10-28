export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name:"companypic",
      title : "CompanyPic",
      type : "image",
      options:{
        hotspot : true
      }
    },
    {
      name : "jobtitle",
      title : "JobTitle",
      type : "string"
    },
    {
      name : "companyname",
      title : "CompanyName",
      type : "string"
    },
    {
      name : "duration",
      title : "Duration",
      type : "string"
    },
    {
      name : "technologies",
      title : "Technologies",
      type : "array",
      of : [{type : "reference", to : {type : "technologies"}}]
    }
  ]
}
