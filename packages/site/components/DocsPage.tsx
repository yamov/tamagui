import { LogoIcon } from '@components/TamaguiLogo'
import { ThemeToggle } from '@components/ThemeToggle'
import { allDocsRoutes, docsRoutes } from '@lib/docsRoutes'
import { Menu } from '@tamagui/feather-icons'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { Button, Paragraph, Text, Theme, VisuallyHidden, XStack, YStack } from 'tamagui'

import { AlphaButton } from './AlphaButton'
import { ColorToggleButton, useTint } from './ColorToggleButton'
import { Container } from './Container'
import { DocsRouteNavItem } from './DocsRouteNavItem'
import { GithubIcon } from './GithubIcon'
import { Link } from './Link'
import { NavHeading } from './NavHeading'
import { SearchButton } from './Search'

const allNotPending = allDocsRoutes.filter((x) => !x['pending'])

export function DocsPage({ children }: { children: React.ReactNode }) {
  // const { theme } = useTheme()
  const { tint } = useTint()
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)

  let currentPath = router.pathname
  if (Array.isArray(router.query.slug)) {
    currentPath = currentPath.replace('[...slug]', router.query.slug[0])
  } else {
    currentPath = currentPath.replace('[slug]', router.query.slug as string)
  }

  const currentPageIndex = allNotPending.findIndex((page) => page.route === currentPath)
  const previous = allNotPending[currentPageIndex - 1]
  const next = allNotPending[currentPageIndex + 1]
  const GITHUB_URL = 'https://github.com'
  const REPO_NAME = 'tamagui/tamagui'
  const editUrl = `${GITHUB_URL}/${REPO_NAME}/edit/master/packages/site/data${currentPath}.mdx`

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  const menuContents = React.useMemo(() => {
    return (
      <>
        {docsRoutes.map((section, i) => (
          <YStack key={`${section.label}${i}`} mb="$4">
            <NavHeading>{section.label}</NavHeading>
            {section.pages.map((page) => {
              return (
                <DocsRouteNavItem
                  key={`${page.route}`}
                  href={page.route}
                  active={currentPath === page.route}
                  pending={page['pending']}
                >
                  {page.title}
                </DocsRouteNavItem>
              )
            })}
          </YStack>
        ))}

        <YStack mb="$4">
          <NavHeading>Community</NavHeading>
          {/* <DocsRouteNavItem href="/blog">Blog</DocsRouteNavItem> */}
          <DocsRouteNavItem href="https://github.com/tamagui/tamagui">GitHub</DocsRouteNavItem>
          <DocsRouteNavItem href="https://twitter.com/tamagui_js">Twitter</DocsRouteNavItem>
          <DocsRouteNavItem href="https://discord.gg/4qh6tdcVDa">Discord</DocsRouteNavItem>
        </YStack>

        <YStack
          height="$5"
          $gtSm={{
            height: '$8',
          }}
        />
      </>
    )
  }, [docsRoutes, currentPath])

  const pageContents = React.useMemo(() => {
    return (
      <>
        <XStack
          $sm={{ display: 'none' }}
          position="absolute"
          top={15}
          right={30}
          ai="center"
          space="$2"
        >
          <SearchButton />

          <AlphaButton />

          <NextLink href="https://github.com/tamagui/tamagui" passHref>
            <YStack opacity={0.65} hoverStyle={{ opacity: 1 }} tag="a" target="_blank">
              <VisuallyHidden>
                <Text>Github</Text>
              </VisuallyHidden>
              <GithubIcon width={23} />
            </YStack>
          </NextLink>
        </XStack>
        <Container>{children}</Container>

        <Container>
          {(previous || next) && (
            <XStack aria-label="Pagination navigation" my="$9" jc="space-between" space>
              {previous && (
                <NextLink href={previous.route} passHref>
                  <YStack
                    hoverStyle={{
                      backgroundColor: '$backgroundHover',
                    }}
                    flex={1}
                    width="50%"
                    p="$3"
                    borderRadius="$2"
                    borderWidth={1}
                    borderColor="$borderColor"
                    tag="a"
                    aria-label={`Previous page: ${previous.title}`}
                    ai="flex-start"
                  >
                    <YStack mb="$2">
                      <Paragraph theme="alt1" size="$6">
                        Previous
                      </Paragraph>
                    </YStack>
                    <Paragraph size="$3" fontWeight="800">
                      {previous.title}
                    </Paragraph>
                  </YStack>
                </NextLink>
              )}
              {next && (
                <NextLink href={next.route} passHref>
                  <YStack
                    hoverStyle={{
                      backgroundColor: '$backgroundHover',
                    }}
                    width="50%"
                    flex={1}
                    p="$3"
                    borderRadius="$2"
                    borderWidth={1}
                    borderColor="$borderColor"
                    tag="a"
                    aria-label={`Previous page: ${next.title}`}
                    ai="flex-end"
                  >
                    <YStack mb="$2">
                      <Paragraph theme="alt1" size="$6">
                        Next
                      </Paragraph>
                    </YStack>
                    <Paragraph size="$3" fontWeight="800">
                      {next.title}
                    </Paragraph>
                  </YStack>
                </NextLink>
              )}
            </XStack>
          )}
        </Container>

        <Container my="$3">
          <Link
            href={editUrl}
            // @ts-ignore
            title="Edit this page on GitHub."
            rel="noopener noreferrer"
            target="_blank"
          >
            Edit this page on GitHub.
          </Link>
        </Container>
      </>
    )
  }, [children, previous, next, editUrl])

  return (
    <Theme name={tint}>
      <YStack
        $gtSm={{
          flexDirection: 'row',
        }}
      >
        <YStack
          width="100%"
          maxHeight="auto"
          borderColor="$borderColor"
          borderRightWidth={1}
          overflow="hidden"
          $gtSm={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: 230,
            borderRightWidth: 1,
            borderRightColor: '$borderColor',
          }}
        >
          <ScrollView>
            <XStack ai="center" p="$4">
              <Link href="/">
                <VisuallyHidden>
                  <Text>Homepage</Text>
                </VisuallyHidden>
                <LogoIcon downscale={2} />
              </Link>

              <XStack space="$1" ml="auto">
                <ColorToggleButton />
                <ThemeToggle chromeless />
              </XStack>

              <YStack
                ml="$2"
                $gtSm={{
                  display: 'none',
                }}
              >
                <Button
                  noTextWrap
                  onPress={() => setIsOpen(!isOpen)}
                  theme={isOpen ? 'alt1' : undefined}
                >
                  <Menu size={16} color="var(--color)" />
                </Button>
              </YStack>
            </XStack>

            <YStack
              display={isOpen ? 'flex' : 'none'}
              $gtSm={{
                display: 'block',
              }}
            >
              {menuContents}
            </YStack>
          </ScrollView>
        </YStack>

        <YStack
          maxWidth="100%"
          flex={1}
          py="$5"
          $gtSm={{
            pt: 67,
            pb: '$9',
            pl: 230,
            pr: 0,
          }}
          $gtMd={{
            pr: 150,
          }}
        >
          {pageContents}
        </YStack>
      </YStack>
    </Theme>
  )
}

export type NavItemProps = {
  children: React.ReactNode
  active?: boolean
  href: string
  pending?: boolean
  external?: boolean
}
