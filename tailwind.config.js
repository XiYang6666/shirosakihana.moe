/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "media",
    content: ["srcDir/**/*.{vue,scss}"],
    theme: {
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        // 全局字体颜色设置为 zinc-700（深色模式前）
                        color: theme('colors.zinc.700'),
                        a: {
                            color: theme('colors.zinc.900'), // 链接颜色
                            '&:hover': {
                                color: theme('colors.zinc.600')
                            }
                        },
                        // 标题颜色
                        h1: { color: theme('colors.zinc.800') },
                        h2: { color: theme('colors.zinc.800') },
                        // 代码块背景色
                        pre: {
                            color: theme('colors.zinc.600'),
                            backgroundColor: theme('colors.zinc.100')
                        },
                        // 引用块颜色
                        blockquote: {
                            color: theme('colors.zinc.600')
                        }
                    }
                },
                // 暗黑模式配置（如果启用）
                invert: {
                    css: {
                        color: theme('colors.zinc.300'), // 暗黑模式字体颜色
                        a: {
                            color: theme('colors.zinc.100'),
                            '&:hover': {
                                color: theme('colors.zinc.50')
                            }
                        },
                        h1: { color: theme('colors.zinc.100') },
                        h2: { color: theme('colors.zinc.100') },
                        pre: {
                            color: theme('colors.zinc.400'),
                            backgroundColor: theme('colors.zinc.800')
                        }
                    }
                }
            })
        },
    },
    plugins: [require('@tailwindcss/typography'), require('tailwindcss-scrollbar')],
};
