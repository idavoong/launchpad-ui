import type { NotificationLevel } from './types';
import type { KeyboardEvent, ReactNode } from 'react';

import { ButtonKind, IconButton, IconButtonSize } from '@launchpad-ui/button';
import { CopyToClipboard } from '@launchpad-ui/clipboard';
import { KindIcon, Close, ExpandMore, IconSize } from '@launchpad-ui/icons';
import { FocusScope } from '@react-aria/focus';
import { cx } from 'classix';
import { useCallback, useEffect, useRef, useState } from 'react';

import './styles/Notification.css';

type NotificationProps = {
  details?: string;
  level: NotificationLevel;
  message: ReactNode;
  onDismiss?: () => void;
  ttl?: number;
  json?: string;
};

const Notification = ({
  level,
  message,
  details,
  onDismiss = () => undefined,
  json,
  ttl,
  ...props
}: NotificationProps) => {
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [showDetails, setShowDetails] = useState(false);
  const [containFocus, setContainFocus] = useState(false);
  const [isCommandBarOpen, setIsCommandBarOpen] = useState<() => boolean | undefined>();

  const close = useCallback(() => {
    onDismiss();
  }, [onDismiss]);

  const handleEscape = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    setIsCommandBarOpen(() => window.CommandBar?.isOpen);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (ttl) {
      timeout.current = setTimeout(onDismiss, ttl);
    }
  }, [ttl, onDismiss]);

  useEffect(() => {
    if (containFocus) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);

      if (containFocus) {
        setContainFocus(false);
      }
    };
  }, [containFocus, handleEscape]);

  useEffect(() => {
    if (showDetails && timeout.current) {
      clearTimeout(timeout.current);
      delete timeout.current;
    }
  }, [showDetails]);

  const handleMouseOver = () => {
    setContainFocus(true);
  };

  const handleMouseOut = () => {
    setContainFocus(false);
  };

  const handleCloseClick = () => {
    onDismiss();
  };

  const handleDetailsKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleDetailsClick();
    }
  };

  const handleDetailsClick = () => {
    setShowDetails(true);
  };

  const classes = cx('Notification', `Notification--${level}`);
  const detailsClasses = cx('Notification-details', showDetails && 'is-expanded');

  const content = (
    <>
      <KindIcon kind={level} className="Notification-icon" />
      <div className="Notification-body">
        <div className="Notification-message">{message}</div>
        {details && (
          <div className={detailsClasses} data-test-id="details-container">
            <button
              aria-label="More details"
              aria-expanded={showDetails}
              aria-haspopup
              className="Notification-detailsExpand"
              onClick={handleDetailsClick}
              onKeyDown={handleDetailsKeyDown}
            >
              More details <ExpandMore size={IconSize.SMALL} />
            </button>

            <div className="Notification-detailsContent">{details}</div>
            {json && <CopyToClipboard text={json}>Copy details</CopyToClipboard>}
          </div>
        )}
      </div>
      <IconButton
        icon={<Close size={IconSize.SMALL} />}
        size={IconButtonSize.SMALL}
        onClick={handleCloseClick}
        aria-label="Close"
        kind={ButtonKind.CLOSE}
        tabIndex={0}
        className="Notification-closeIcon"
        data-test-id="notification-close"
      />
    </>
  );

  return (
    <div
      role="alert"
      {...props}
      className={classes}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleMouseOver}
      onBlur={handleMouseOut}
    >
      {containFocus ? <FocusScope contain={!isCommandBarOpen?.()}>{content}</FocusScope> : content}
    </div>
  );
};

export { Notification };
export type { NotificationProps };
