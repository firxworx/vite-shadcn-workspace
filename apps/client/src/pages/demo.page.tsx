import { Link } from 'react-router'
import { PageLayout } from '@workspace/react-layout/page.layout'

export default function DemoPage(): JSX.Element {
  return (
    <PageLayout className="prose">
      <h1>Demo Page</h1>
      <p>
        Welcome to demo page that demonstrates the tailwind theme contributed by the shared tailwind preset in the
        workspace.
      </p>
      <p>
        Content on this page is styled using the <code>prose</code> utility class provided by the official{' '}
        <Link to="https://github.com/tailwindlabs/tailwindcss-typography">TailwindCSS Typography Plugin</Link>.
      </p>
      <h2>Fluid Responsive Design</h2>
      <p>
        Various layout components demonstrate use of the <code>~</code> modifier added by{' '}
        <Link to="https://fluid.tw/">fluid-tailwind</Link> to define fluid responsive styles.
      </p>
      <p>
        The shadcn/ui components in <code>/packages/react-ui</code> generated by the shadcn CLI to support the demo
        React app have been left mostly stock to provide a blank slate for new projects and are ready for further
        customization.
      </p>
      <h2>Workspace Preset</h2>
      <p>
        The shared workspace tailwind preset is housed in <code>/packages/tw-preset-workspace</code>.
      </p>
      <p>
        Custom palette colors can be added via <code>base.global.variables.ts</code> and{' '}
        <code>theme.extend.colors.ts</code>.
      </p>
      <h2>Demo Styles</h2>
      <p>
        This is prose text in <strong>bold</strong>, <em>italics</em>, and{' '}
        <strong>
          <em>bold + italics</em>
        </strong>
        .
      </p>
      <p>Bullet list:</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <p>Numbered list with nesting:</p>
      <ol>
        <li>Example List Item 1</li>
        <li>Example List Item 2</li>
        <li>
          Parent of Nested Item&hellip;
          <ol>
            <li>Nested Item 1</li>
            <li>Nested Item 2</li>
          </ol>
        </li>
      </ol>
      <p>
        This is a <Link to="/">link to the index page</Link> to show the styling of anchor elements inside{' '}
        <code>prose</code>.
      </p>
      <p>
        Here's an inline code element: <code>pnpm install</code>
      </p>
      <p>Blockquote:</p>
      <blockquote>
        <strong>Tip:</strong> restart the dev server after making changes to the workspace tailwind preset to ensure all
        changes are applied to the generated stylesheet.
      </blockquote>
      <h2>Lorem Ipsum</h2>
      <p>The following placeholder text fills out a long page&hellip;</p>
      <p>
        Let's start with a really long paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        quis porta eros, vitae sagittis tortor. Donec nec posuere orci. Nam purus tellus, mattis ut massa id, imperdiet
        efficitur sapien. Etiam nec diam condimentum, tristique diam ac, congue felis. Aliquam scelerisque est ut massa
        ultrices, vitae tempor tortor lobortis. Donec libero libero, blandit vel sodales sed, tempor eget enim. Sed
        turpis augue, scelerisque id aliquam at, mattis eget erat. Nulla eros augue, cursus et sem porttitor, aliquam
        porttitor eros. Sed vulputate dui mattis blandit pretium. Donec vehicula vel lectus at malesuada. Cras arcu est,
        porttitor vitae aliquam aliquet, tristique sed dui. Curabitur pharetra convallis nulla quis lobortis.
      </p>
      <p>
        Maecenas in tortor placerat, feugiat nunc vitae, mollis ligula. In vel augue sollicitudin, tincidunt risus eget,
        aliquet ligula. Cras pharetra magna turpis, eget tempus felis fringilla eget. Nullam a auctor purus. Ut eu leo
        enim. Nullam fermentum finibus neque at interdum. Nunc id sollicitudin enim.
      </p>
      <h3>Heading Level 3</h3>
      <p>
        Aliquam feugiat nunc sit amet augue elementum sodales. Sed luctus dui magna, nec suscipit lorem lobortis a.
        Curabitur consectetur velit urna, vestibulum aliquam est efficitur tempor. Integer sit amet ex euismod,
        scelerisque mauris nec, ullamcorper elit.
      </p>
      <p>
        Maecenas vel enim eu lorem fermentum pellentesque. Fusce eu mollis mi. Donec ac sem urna. Vestibulum eu ultrices
        urna. In ut pellentesque ante, vel elementum tortor. Duis est neque, sagittis quis viverra eget, lacinia sit
        amet justo. Aliquam erat volutpat.
      </p>
      <h4>Heading Level 4</h4>
      <p>
        Vivamus finibus sodales velit quis accumsan. Maecenas varius neque velit, in lobortis justo pulvinar tempor.
        Mauris eget euismod augue.
      </p>
      <p>Sed mi est, scelerisque ac tincidunt ut, sodales vel tellus.</p>
      <p>
        Mauris sodales risus quis felis consectetur finibus. Duis finibus feugiat fringilla. Aliquam ut massa nisl.
        Integer volutpat lectus sed metus varius volutpat. Donec quis purus porta, placerat dolor ac, viverra augue. Nam
        et accumsan nisl.
      </p>
    </PageLayout>
  )
}
