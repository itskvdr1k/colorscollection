import { tabLinks } from "@/utils/tabs";
import ColorPicker from "../ui/colorPicker/ColorPicker";
import Layout from "../ui/layout/Layout";
import Tabs from "../ui/tabs/Tabs";
import Tab from "../ui/tabs/Tab";
import Profile from "../ui/profile/Profile";

export default function HomeScreen() {
    return (
        <Layout>
            <Tabs tabLinks={tabLinks}>
                <Tab tabId={1}>
                    <ColorPicker/>
                </Tab>
                <Tab tabId={2}>
                    <Profile/>
                </Tab>
            </Tabs>
        </Layout>
    )
}