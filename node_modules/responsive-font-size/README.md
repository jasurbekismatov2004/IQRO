# Responsive Font Size
Responsive font size, control the font size of an element at a specific breakpoink.

## Available default sizes
```
text-xs: .75rem;
text-sm: .875rem;
text-tiny: .875rem;
text-base: 1rem;
text-lg: 1.125rem;
text-xl: 1.25rem;
text-2xl: 1.5rem;
text-3xl: 1.875rem;
text-4xl: 2.25rem;
text-5xl: 3rem;
text-6xl: 4rem;
text-7xl: 5rem;
```

## Responsive
Add size prefix before the class name {screen}:{size}

Available breakpoints/screen
```
sm, md, lg, xl
```

Usage example:
```
<p class="text-base sm:text-sm md:text-base lg:text-xl xl:text3xl">Hey there!</p>
```

## Customizing font size and breakpoints
Edit the variable.scss file to change the default font size and breakpoint values, located inside the src folder and run the command below to rebuild.
```
npm rfs-build
```
