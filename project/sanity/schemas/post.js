export default {
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
    name: "name",
    title: "name",
    type: "String"
    },

    {
      name: "role",
      title: "Role",
      type: "string",
    },

    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      }
    },

    {
      name: "email",
      title: "Address",
      type: "string",
    },

    {
      name: "socials",
      title: "socials",
      type: "string",
      of:[{type: "reference", to: {type: "social"}}],
    },
  ],
}