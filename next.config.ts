import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const config = {
  reactStrictMode: true,
};

export default withNextIntl(config);
