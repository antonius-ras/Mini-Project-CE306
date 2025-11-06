import { Box, Container, Heading, Text, Card, Flex } from '@radix-ui/themes';

function Home() {
    return (
        <Container size="2" py="6">
            <Box>
                <Heading size="3" mb="4">ยินดีต้อนรับสู่หน้าหลัก</Heading>
                <Text size="2" mb="6" color="gray">
                    เว็บแนะนำตัวและประวัติส่วนตัว

                </Text>
                <Flex direction="column" gap="4">
                    <Card>
                        <Heading size="4" mb="2">เกี่ยวกับเว็บนี้</Heading>
                        <Text size="2" color="gray">
                            เว็บนี้เป็นตัวอย่างการใช้งาน React ร่วมกับ React Router เพื่อสร้างการนำทางระหว่างหน้า และใช้ Radix UI Themes เพื่อการออกแบบที่สวยงามและตอบสนองได้ดี.
                        </Text>
                    </Card>

                    <Card>
                        <Heading size="4" mb="2">เทคโนโลยีที่ใช้</Heading>
                        <Text size="2" color="gray">
                            React <br />
                            React Router <br />
                            Radix UI Themes<br />
                            Vite
                        </Text>
                    </Card>
                </Flex>
            </Box>

        </Container>
    );
}
export default Home;