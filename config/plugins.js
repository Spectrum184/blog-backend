module.exports = ({ env }) => {
  return {
    ckeditor: true,
    chartbrew: true,
    'cookie-manager': {
      enabled: true,
      config: {
        localization: true,
      },
    },
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: env('DEFAULT_EMAIL_FROM'),
          defaultReplyTo: env('DEFAULT_EMAIL_REPLY'),
        },
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          post: {
            field: 'slug',
            references: 'title',
          },
          tag: {
            field: 'slug',
            references: 'content',
          },
          category: {
            field: 'slug',
            references: 'title',
          },
        },
      },
    },
    'generate-data': {
      enabled: true,
    },
    'custom-api': {
      enabled: true,
    },
  };
};
