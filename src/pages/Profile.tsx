import { Box, Container, Heading, Text, Card, Flex, Avatar, Badge, Separator, Grid } from '@radix-ui/themes';

function Profile() {
    return (
        <Container size="3" py="6">
            <Card>
                <Grid columns="2" gap="3" p="5">
                    <Flex align="center" gap="4">
                        <Avatar size="8" radius="full" fallback="SP" color="blue" src='https://lh3.googleusercontent.com/a-/ALV-UjVhhSOEvJd711Stm2xXWnUMPkMbAzJtrV7oNra5ZHuKY1WhpVw=s240-p-k-rw-no' />
                        <Box>
                            <Heading size="7">Tobias Ras</Heading>
                            <Text size="3" color="gray">Full Stack Developer</Text>
                        </Box>
                    </Flex>

                    <Box>
                        <Heading size="5" mb="2">ประวัติส่วนตัว</Heading>
                        <Text size="2" color="gray" mb="4">ผมชื่อ Tobias Ras เป็นนักพัฒนาซอฟต์แวร์ Full Stack ที่มีความชำนาญในการสร้างแอปพลิเคชันเว็บที่ตอบสนองได้ดีและมีประสิทธิภาพและมีความสามารถในการทำงานกับเทคโนโลยีทั้งด้านหน้าและด้านหลัง</Text>
                    </Box>
                </Grid>
                <Grid columns="2" gap="3" p="5">

                    {/* คอลัมน์ 1: จะมี การศึกษา และ ทักษะ (เพื่อให้ ทักษะ ขึ้นไปเติมช่องว่างใต้ การศึกษา) */}
                    <Flex direction="column" gap="5"> {/* เพิ่ม Flex เพื่อซ้อน การศึกษา และ ทักษะ เข้าด้วยกัน */}

                        {/* การศึกษา */}
                        <Box>
                            <Heading size="5" mb="2">การศึกษา</Heading>
                            <Card mb="3">
                                <Flex direction="column" gap="2">
                                    <Heading size="6">มหาวิทยาลัยธุรกิจบัณฑิตย์</Heading>
                                    <Text color="gray">ปริญญาตรีสาขาวิศวะกรรมคอมพิวเตอร์</Text>
                                    <Text size="2" color="gray">วิศวกรรมซอฟต์แวร์ปี 2015 - 2019</Text>
                                    <Heading size="6">มหาวิทยาลัยกรุงเทพ</Heading>
                                    <Text color="gray">ปริญญาโทสาขาวิศวกรรมไฟฟ้า</Text>
                                    <Text size="2" color="gray">วิศวกรรมไฟฟ้าปี 2020 - 2022</Text>
                                </Flex>
                            </Card>
                        </Box>

                        {/* ทักษะ (ส่วนนี้จะถูกจัดวางต่อจาก 'การศึกษา' ในคอลัมน์เดียวกัน) */}
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

                    {/* คอลัมน์ 2: ประสบการณ์ทำงาน (อยู่คนเดียว) */}
                    <Box>
                        <Heading size="5" mb="2">ประสบการณ์ทำงาน</Heading>
                        <Card mb="3">
                            <Flex direction="column" gap="2">
                                <Heading size="6">บริษัท เทคโนโลยี จำกัด</Heading>
                                <Text color="gray">ตำแหน่ง นักพัฒนาซอฟต์แวร์ (2019 - ปัจจุบัน)</Text>
                                <Text size="2" color="gray">- พัฒนาและบำรุงรักษาแอปพลิเคชันเว็บโดยใช้ React และ Node.js<br />
                                    - ทำงานร่วมกับทีมข้ามสายงานเพื่อออกแบบและปรับใช้โซลูชันซอฟต์แวร์ที่มีประสิทธิภาพ<br />
                                    - เขียนโค้ดที่สะอาด มีประสิทธิภาพ และมีการทดสอบเพื่อให้มั่นใจในคุณภาพของซอฟต์แวร์</Text>
                                <Heading size="6">บริษัท อินโนเวชั่น จำกัด</Heading>
                                <Text color="gray">ตำแหน่ง นักพัฒนาระบบ (2017 - 2019)</Text>
                                <Text size="2" color="gray">- สนับสนุนการพัฒนาและบำรุงรักษาระบบภายในองค์กร<br />
                                    - ทำงานร่วมกับทีมเพื่อระบุและแก้ไขปัญหาทางเทคนิค<br />
                                    - ช่วยในการปรับปรุงประสิทธิภาพและความปลอดภัยของระบบ</Text>
                            </Flex>
                        </Card>
                    </Box>
                </Grid>



            </Card>
        </Container>
    );

}
export default Profile;