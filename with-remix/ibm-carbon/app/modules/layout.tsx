import { Outlet } from "@remix-run/react";
import { Grid, Column } from '@carbon/react';

export default function MainLayout() {
    return (
        <Grid fullWidth>
            <Column lg={1}>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/button">Button</a>
                        </li>
                    </ul>
                </nav>
            </Column>
            <Column lg={15}>
                <Outlet />
            </Column>
        </Grid>
    );
}