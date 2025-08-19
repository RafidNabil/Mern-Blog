import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import { Box, Typography } from '@mui/joy';

import SocialShare from '../Post/socialShare';

export default function BlogContent() {
    return (
        <CssVarsProvider>
            {/* Main content area */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2, // Space between the social share and content
                    maxWidth: '900px',
                    mx: 'auto', // Centers the content horizontally
                    mt: 2,
                }}
            >
                {/* Social Share */}
                <Box
                    sx={{
                        position: 'sticky',
                        top: '100px', // Adjust to keep it visible while scrolling
                        alignSelf: 'flex-start',
                    }}
                >
                    <SocialShare />
                </Box>

                {/* Blog content */}
                <Box
                    sx={{
                        flex: 1,
                        p: 2, // Padding for inner content
                    }}
                >
                    <Typography level="h2" fontWeight="bold" sx={{ mb: 1 }}>
                        Blog Title Goes Here
                    </Typography>
                    <Typography level="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                        Written by Author Name on January 1, 2024
                    </Typography>
                    <Typography level="body1" sx={{ lineHeight: 1.7 }}>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Nam taciti amet potenti nullam magna. Placerat commodo nostra elit varius suscipit facilisis accumsan dis enim. Phasellus dignissim condimentum eu ad; tristique volutpat. Fringilla mollis malesuada; etiam pretium tempor mattis. Morbi ac potenti condimentum fringilla sed vel egestas. Adictum arcu; scelerisque suspendisse proin natoque porta. Nec odio bibendum elementum cursus ultrices tincidunt fringilla egestas.

                        Tristique sem odio tincidunt nibh accumsan fames duis. Mus magna id maecenas fusce suscipit tellus dolor ultrices. Felis blandit placerat fames penatibus luctus. Commodo odio pellentesque vel auctor dis rutrum. Orci placerat volutpat vehicula magna turpis rhoncus. Libero euismod lacus natoque condimentum per maximus mus sociosqu. Faucibus posuere sollicitudin luctus habitant enim vulputate hendrerit. Viverra aenean netus faucibus malesuada maximus. Tristique volutpat quisque semper per finibus nostra. Pulvinar montes taciti praesent at ex nulla laoreet.

                        Fusce taciti curabitur imperdiet molestie nulla. Iaculis senectus inceptos; potenti pretium gravida molestie viverra. Purus dictumst lorem donec tristique phasellus velit vehicula proin. Ipsum elit fringilla fusce curae feugiat lacus. Auctor nisi duis conubia rutrum porttitor porta. Donec vestibulum et purus suspendisse malesuada. Neque posuere pellentesque inceptos velit justo leo non.

                        Tempor tristique vivamus venenatis habitant auctor primis. Lacus fermentum mus class habitasse sollicitudin, erat eget. Vestibulum vitae viverra accumsan sagittis tortor vehicula proin. Tortor neque id arcu nisl, augue consequat habitasse molestie. Vulputate nec purus felis lobortis phasellus erat class tellus. Ad feugiat venenatis; neque ut fringilla parturient.

                        Vivamus amet eget hendrerit per himenaeos cursus accumsan dignissim. Imperdiet enim interdum arcu inceptos sociosqu volutpat. Amet mi phasellus dictum arcu, molestie penatibus. Est cursus urna lectus tortor primis magnis efficitur ullamcorper in. Imperdiet nunc cubilia phasellus justo velit per. Sociosqu malesuada aenean aenean non quisque dolor neque ad. Faucibus ullamcorper nisl eu ipsum ullamcorper eleifend non. Enim facilisis condimentum scelerisque, nam vel a. Nisl commodo auctor enim curae sagittis.

                        Sociosqu justo lacinia mi iaculis molestie eleifend. Integer molestie amet urna eget vestibulum malesuada risus? Interdum sit fames vestibulum ante egestas suscipit ut erat. Dapibus vel non magnis in, commodo tempus dapibus duis. Lacus dignissim convallis ornare dui quam; proin lobortis. Vitae integer conubia semper risus aenean quam. Turpis sociosqu sodales mattis vitae vehicula curae lobortis malesuada viverra. Nisi quam risus risus nostra, diam sociosqu nisi congue.

                        Montes taciti magna finibus est velit habitant quis malesuada. Consectetur ridiculus conubia; a luctus viverra maximus. Morbi pellentesque ligula semper ornare ad cubilia netus? Sollicitudin platea ante sit; a id praesent. Pellentesque risus eu nibh elementum torquent donec. Nibh orci odio; lectus nisl conubia inceptos a. Magna augue fusce lobortis habitant platea conubia donec ligula tristique. Placerat facilisis velit cubilia vehicula curae orci. Nibh eleifend congue scelerisque lacus laoreet rutrum molestie. Efficitur justo donec condimentum justo habitant quis egestas.

                        Nullam eu mattis sagittis orci class dolor penatibus. Ligula egestas auctor sociosqu suscipit hendrerit primis sollicitudin. Porttitor conubia nec sem ornare hac orci dui. Cubilia cubilia ullamcorper himenaeos suscipit odio porttitor. Dapibus integer imperdiet felis aliquet fringilla et facilisis. Vel parturient nascetur eleifend odio suspendisse at elementum curabitur magna. Maximus maximus nam penatibus feugiat, aenean ultrices dolor nulla. Tempus nunc mollis placerat tempus semper euismod etiam netus et.

                        Ipsum taciti hendrerit class dis aliquam malesuada netus finibus. Diam blandit ullamcorper quis elit magnis maximus. Vulputate vehicula natoque pellentesque vivamus eleifend urna. Aptent per eleifend magnis primis; venenatis donec mattis pharetra. Laoreet dictum erat dictum quisque per malesuada lobortis ultrices vitae. Pellentesque elementum massa mi id quam auctor bibendum curae. Cubilia pretium luctus nisl montes id erat. Montes felis iaculis cubilia est class sollicitudin fringilla fermentum semper. Arcu netus erat id malesuada enim molestie posuere sollicitudin tellus. Tristique lectus sociosqu phasellus luctus consectetur luctus.

                        Dictum facilisi curae laoreet eu; justo luctus magna curabitur. Scelerisque tortor convallis dignissim congue lacus efficitur nulla tristique! Auctor mus himenaeos torquent tortor convallis. Nascetur curae ligula quis massa nibh velit himenaeos vulputate. Natoque hendrerit auctor ridiculus montes vel; augue scelerisque. Facilisi feugiat sollicitudin purus, curabitur neque mauris. Netus sem netus proin id dolor himenaeos amet natoque.Lorem ipsum odor amet, consectetuer adipiscing elit. Nam taciti amet potenti nullam magna. Placerat commodo nostra elit varius suscipit facilisis accumsan dis enim. Phasellus dignissim condimentum eu ad; tristique volutpat. Fringilla mollis malesuada; etiam pretium tempor mattis. Morbi ac potenti condimentum fringilla sed vel egestas. Adictum arcu; scelerisque suspendisse proin natoque porta. Nec odio bibendum elementum cursus ultrices tincidunt fringilla egestas.

                        Tristique sem odio tincidunt nibh accumsan fames duis. Mus magna id maecenas fusce suscipit tellus dolor ultrices. Felis blandit placerat fames penatibus luctus. Commodo odio pellentesque vel auctor dis rutrum. Orci placerat volutpat vehicula magna turpis rhoncus. Libero euismod lacus natoque condimentum per maximus mus sociosqu. Faucibus posuere sollicitudin luctus habitant enim vulputate hendrerit. Viverra aenean netus faucibus malesuada maximus. Tristique volutpat quisque semper per finibus nostra. Pulvinar montes taciti praesent at ex nulla laoreet.

                        Fusce taciti curabitur imperdiet molestie nulla. Iaculis senectus inceptos; potenti pretium gravida molestie viverra. Purus dictumst lorem donec tristique phasellus velit vehicula proin. Ipsum elit fringilla fusce curae feugiat lacus. Auctor nisi duis conubia rutrum porttitor porta. Donec vestibulum et purus suspendisse malesuada. Neque posuere pellentesque inceptos velit justo leo non.

                        Tempor tristique vivamus venenatis habitant auctor primis. Lacus fermentum mus class habitasse sollicitudin, erat eget. Vestibulum vitae viverra accumsan sagittis tortor vehicula proin. Tortor neque id arcu nisl, augue consequat habitasse molestie. Vulputate nec purus felis lobortis phasellus erat class tellus. Ad feugiat venenatis; neque ut fringilla parturient.

                        Vivamus amet eget hendrerit per himenaeos cursus accumsan dignissim. Imperdiet enim interdum arcu inceptos sociosqu volutpat. Amet mi phasellus dictum arcu, molestie penatibus. Est cursus urna lectus tortor primis magnis efficitur ullamcorper in. Imperdiet nunc cubilia phasellus justo velit per. Sociosqu malesuada aenean aenean non quisque dolor neque ad. Faucibus ullamcorper nisl eu ipsum ullamcorper eleifend non. Enim facilisis condimentum scelerisque, nam vel a. Nisl commodo auctor enim curae sagittis.

                        Sociosqu justo lacinia mi iaculis molestie eleifend. Integer molestie amet urna eget vestibulum malesuada risus? Interdum sit fames vestibulum ante egestas suscipit ut erat. Dapibus vel non magnis in, commodo tempus dapibus duis. Lacus dignissim convallis ornare dui quam; proin lobortis. Vitae integer conubia semper risus aenean quam. Turpis sociosqu sodales mattis vitae vehicula curae lobortis malesuada viverra. Nisi quam risus risus nostra, diam sociosqu nisi congue.

                        Montes taciti magna finibus est velit habitant quis malesuada. Consectetur ridiculus conubia; a luctus viverra maximus. Morbi pellentesque ligula semper ornare ad cubilia netus? Sollicitudin platea ante sit; a id praesent. Pellentesque risus eu nibh elementum torquent donec. Nibh orci odio; lectus nisl conubia inceptos a. Magna augue fusce lobortis habitant platea conubia donec ligula tristique. Placerat facilisis velit cubilia vehicula curae orci. Nibh eleifend congue scelerisque lacus laoreet rutrum molestie. Efficitur justo donec condimentum justo habitant quis egestas.

                        Nullam eu mattis sagittis orci class dolor penatibus. Ligula egestas auctor sociosqu suscipit hendrerit primis sollicitudin. Porttitor conubia nec sem ornare hac orci dui. Cubilia cubilia ullamcorper himenaeos suscipit odio porttitor. Dapibus integer imperdiet felis aliquet fringilla et facilisis. Vel parturient nascetur eleifend odio suspendisse at elementum curabitur magna. Maximus maximus nam penatibus feugiat, aenean ultrices dolor nulla. Tempus nunc mollis placerat tempus semper euismod etiam netus et.

                        Ipsum taciti hendrerit class dis aliquam malesuada netus finibus. Diam blandit ullamcorper quis elit magnis maximus. Vulputate vehicula natoque pellentesque vivamus eleifend urna. Aptent per eleifend magnis primis; venenatis donec mattis pharetra. Laoreet dictum erat dictum quisque per malesuada lobortis ultrices vitae. Pellentesque elementum massa mi id quam auctor bibendum curae. Cubilia pretium luctus nisl montes id erat. Montes felis iaculis cubilia est class sollicitudin fringilla fermentum semper. Arcu netus erat id malesuada enim molestie posuere sollicitudin tellus. Tristique lectus sociosqu phasellus luctus consectetur luctus.

                        Dictum facilisi curae laoreet eu; justo luctus magna curabitur. Scelerisque tortor convallis dignissim congue lacus efficitur nulla tristique! Auctor mus himenaeos torquent tortor convallis. Nascetur curae ligula quis massa nibh velit himenaeos vulputate. Natoque hendrerit auctor ridiculus montes vel; augue scelerisque. Facilisi feugiat sollicitudin purus, curabitur neque mauris. Netus sem netus proin id dolor himenaeos amet natoque.
                    </Typography>
                </Box>
            </Box>
        </CssVarsProvider>
    )
};