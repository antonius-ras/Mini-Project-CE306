import { Box, Container, Heading, Text, Card, Flex, Avatar, Badge, Separator } from '@radix-ui/themes';

function Profile() {
    return (
        <Container size="3" py="6">
            <Card>
                <Flex direction="column" gap="4">
                    <Flex align="center" gap="4">
                        <Avatar size="8" radius="full" fallback="SP" color="blue" />
                        <Box>
                            <Heading size="7">Tobias Ras</Heading>
                            <Text size="3" color="gray">Full Stack Developer</Text>
                        </Box>
                    </Flex>
                    <Separator size="4" />
                    <Box>
                        <Heading size="5" mb="2">ประวัติส่วนตัว</Heading>
                        <Text size="2" color="gray" mb="4">Tobias Ras is a highly skilled Full Stack Developer with a passion for creating dynamic and responsive web applications. With expertise in both front-end and back-end technologies, Tobias is adept at building seamless user experiences and robust server-side logic.</Text>
                    </Box>

                    <Separator size="4" />
                    <Box>
                        <Heading size="5" mb="2">การศึกษา</Heading>
                        <Card mb="3">
                            <Flex direction="column" gap="2">
                                <Heading size="6">Bachelor of Science in Computer Science</Heading>
                                <Text color="gray">ปริญญาตรีสาขาวิทยาการคอมพิวเตอร์</Text>
                                <Text size="2" color="gray">University of Technology, 2015 - 2019</Text>
                            </Flex>
                        </Card>
                    </Box>

                    <Separator size="4" />
                    <Box>
                        <Heading size="5" mb="2">ทักษะ</Heading>
                        <Flex gap="2" wrap="wrap">
                            <Badge color="blue" variant="soft">JavaScript</Badge>
                            <Badge color="green" variant="soft">React</Badge>
                            <Badge color="purple" variant="soft">Node.js</Badge>
                            <Badge color="orange" variant="soft">CSS</Badge>
                            <Badge color="red" variant="soft">HTML</Badge>
                            <Badge color="teal" variant="soft">SQL</Badge>
                        </Flex>
                    </Box>
                        

                </Flex>
            </Card>
        </Container>
    );

}
export default Profile;