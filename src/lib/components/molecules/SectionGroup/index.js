import React from 'react'
import { Box } from 'theme-ui'
import PropTypes from 'prop-types'
import { darken } from '@theme-ui/color'

export const SectionGroup = ({ label, children }) => {
  return (
    <Box
      sx={{
        py: 4,
        '& + &': {
          borderTop: (theme) => `1px solid ${theme.colors.secondary}`,
        },
      }}
    >
      {label && (
        <Box
          sx={{
            textTransform: 'uppercase',
            color: darken('muted', 0.5),
            mb: 2,
          }}
        >
          {label}
        </Box>
      )}
      {children}
    </Box>
  )
}

SectionGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
}
