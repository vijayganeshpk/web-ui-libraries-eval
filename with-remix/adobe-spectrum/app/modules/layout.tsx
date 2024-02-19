import { Flex, View } from "@adobe/react-spectrum";
import { Outlet } from "@remix-run/react";

export default function Layout() {
    return (<Flex
        direction="column"
        gap="size-100"
    >
        <View gridArea="header" colorVersion={6}>Header Area</View>
        <View gridArea="content" colorVersion={6}>
            <Flex direction="row" gap="size-100" minHeight="100dvh">
                <View colorVersion={6} width="size-2000">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/button">Button</a></li>
                        </ul>
                    </nav>
                </View>
                <View colorVersion={6} flex backgroundColor="gray-200">
                    <main>
                        <Outlet />
                    </main>
                </View>
            </Flex>
        </View>
        <View gridArea="footer" colorVersion={6}>Footer Area</View>
    </Flex>)
}