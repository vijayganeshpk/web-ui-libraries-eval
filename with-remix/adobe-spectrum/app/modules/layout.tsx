import { Grid, View } from "@adobe/react-spectrum";
import { Outlet } from "@remix-run/react";

export default function Layout() {
    return (<Grid
        areas={[
            'header  header',
            'sidebar content',
            'footer  footer'
        ]}
        columns={['1fr', '3fr']}
        rows={['size-1000', 'auto', 'size-1000']}
        gap="size-100">
        <View gridArea="header">Header Area</View>
        <View gridArea="sidebar">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/button">Button</a></li>
                </ul>
            </nav>
        </View>
        <View gridArea="content" colorVersion={6}>
            <Outlet />
        </View>
        <View gridArea="footer">Footer Area</View>
    </Grid>)
}